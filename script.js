// Dữ liệu 8 thành viên (Đã cập nhật tên và bio theo yêu cầu)
const teamData = [
    {
        id: 1,
        name: "Đoan Trang",
        title: "Lão Hầu Thái Mẫu",
        bio: "Cầm đầu bầy khỉ khám phá giang sơn. Là người duy trì kỷ luật và định hướng cho cả Hoa Quả Sơn.",
        photo: "Doan Trang.jpg",
        links: {
            facebook: "https://www.facebook.com/profile.php?id=61582092471853"
        }
    },
    {
        id: 2,
        name: "Khánh Băng",
        title: "Diệu Mẫu Hồng Vân",
        bio: "Mẫu thân bù nhìn của đàn khỉ. Luôn sẵn sàng hỗ trợ tinh thần và tạo không khí vui vẻ, ấm áp.",
        photo: "Khanh Bang.jpg",
        links: {
            facebook: "https://www.facebook.com/bang.le.942195"
        }
    },
    {
        id: 3,
        name: "Long Vỹ",
        title: "Vãng Gia Hầu",
        bio: "Hoa rơi cửa phật, nhạc giật hồi máu. Anh cả điềm tĩnh, là chỗ dựa vững chắc cho mọi người.",
        photo: "Long Vy.jpg",
        links: {
            facebook: "https://www.facebook.com/huynhlong.vy.12"
        }
    },
    {
        id: 4,
        name: "Nhật Tiến",
        title: "Tam Công Hầu",
        bio: "Còn ten rì ây tỏ, khỉ họ Lào. Luôn mang đến những ý tưởng độc đáo và không ngừng thử thách mọi giới hạn.",
        photo: "Nhat Tien.jpg",
        links: {
            facebook: "https://www.facebook.com/nhat.tien.98075"
        }
    },
    {
        id: 5,
        name: "Lan Ngọc",
        title: "Tiểu Linh Hầu",
        bio: "U ám đến đáng sợ, khó chịu vô cùng. Là chuyên gia phân tích, luôn nhìn nhận vấn đề một cách sâu sắc.",
        photo: "Lan Ngoc.jpg",
        links: {
            facebook: "https://www.facebook.com/lan.ngoc.163054"
        }
    },
    {
        id: 6,
        name: "Tấn Dũng",
        title: "Hầu Nhi Tinh Quang",
        bio: "Còn ten rì ây tỏ, gái gú là phù du. Là bậc thầy về công nghệ, giải quyết mọi vấn đề kỹ thuật.",
        photo: "Tan Dung.jpg",
        links: {
            facebook: "https://www.facebook.com/huynhdung2886"
        }
    },
    {
        id: 7,
        name: "Ngọc Tiên",
        title: "Nguyệt Tịnh Hầu",
        bio: "Sẽ có những cơn gió phải chả cá. Đem lại sự dịu dàng và tinh tế trong mọi hoạt động của nhóm.",
        photo: "Ngoc Tien.jpg",
        links: {
            facebook: "https://www.facebook.com/nguyen.tran.ngoc.tien.212668"
        }
    },
    {
        id: 8,
        name: "Tuyết Ngân",
        title: "Văn Sư Hầu",
        bio: "Thợ lặn rơi từ đảo khỉ. Có khả năng diễn đạt và truyền cảm hứng mạnh mẽ tới mọi người.",
        photo: "Tuyet Ngan.jpg",
        links: {
            facebook: "https://www.facebook.com/tuyet.ngan.661169"
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('member-modal');
    const modalDetails = document.getElementById('modal-details');
    const closeBtn = document.querySelector('.close-btn');
    const detailButtons = document.querySelectorAll('.btn-detail');

    // Hàm hiển thị nội dung chi tiết
    const renderMemberDetails = (member) => {
        // Hàm tạo liên kết với tên hiển thị chuyên nghiệp
        const getLinkHtml = (url, name) => {
            if (!url || url === '#') return '';
            
            let icon = '';
            if (name.toLowerCase().includes('linkedin')) icon = '<i class="fab fa-linkedin"></i> ';
            else if (name.toLowerCase().includes('github')) icon = '<i class="fab fa-github"></i> ';
            else if (name.toLowerCase().includes('facebook')) icon = '<i class="fab fa-facebook"></i> ';
            else if (name.toLowerCase().includes('twitter')) icon = '<i class="fab fa-twitter"></i> ';

            return `<a href="${url}" target="_blank">${icon}${name}</a>`;
        };

        modalDetails.innerHTML = `
            <img src="${member.photo}" alt="Ảnh ${member.name}" class="modal-profile-photo">
            <h3>${member.name}</h3>
            <p class="modal-role">${member.title}</p>
            
            <p>${member.bio}</p>
            
            <div class="modal-links">
                ${getLinkHtml(member.links.linkedin, 'LinkedIn')}
                ${getLinkHtml(member.links.github, 'GitHub')}
                ${getLinkHtml(member.links.facebook, 'Facebook')}
                ${getLinkHtml(member.links.twitter, 'Twitter')}
                </div>
        `;
    };

    // Lắng nghe sự kiện click trên tất cả các nút chi tiết
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); 
            const card = e.target.closest('.member-card');
            if (card) {
                const memberId = parseInt(card.dataset.memberId);
                const selectedMember = teamData.find(m => m.id === memberId);

                if (selectedMember) {
                    renderMemberDetails(selectedMember);
                    modal.classList.add('open');
                }
            }
        });
    });

    // Đóng Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    });
});